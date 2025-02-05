#!/usr/bin/env python3
import re
import argparse
from enum import Enum
from pathlib import Path

class ImageFormat(Enum):
    """supported image asset types"""
    SVG = "svg"
    PDF = "pdf"

    @classmethod
    def default(cls):
        """default image format"""
        return cls.SVG

def update_references_in_file(file_path: str, to_format: ImageFormat) -> bool:
    """
    Update image references in a single PreTeXt XML (.ptx) file to the specified format.
    """
    # Read the input file
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Determine the target format
    from_format = ImageFormat.PDF if to_format == ImageFormat.SVG else ImageFormat.SVG

    # Check if the content needs updating (only proceed if we need to change references)
    updated_content = re.sub(
        rf'(<image source="[^"]+)\.{from_format.value}"',
        rf'\1.{to_format.value}"',
        content
    )

    if updated_content == content:
        return False

    # Write changes back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(updated_content)
    return True


def process_directory(source_dir, to_format):
    """
    Process all .ptx files in the specified directory recursively.
    """
    ptx_files = list(Path(source_dir).rglob("*.ptx"))
    if not ptx_files:
        print(f"No .ptx files found in '{source_dir}'")
        return

    print(f"Found {len(ptx_files)} .ptx files to process in '{source_dir}'")
    for ptx_file in ptx_files:
        updated = update_references_in_file(ptx_file, to_format)
        print(
            f"+ Updated image references to .{to_format.value} in {ptx_file}"
            if updated else f"  No changes made to {ptx_file}"
        )

if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Recursively update image references in PreTeXt files."
    )
    parser.add_argument(
        "directory",
        type=Path,
        help="Path to the source folder containing .ptx files."
    )
    parser.add_argument(
        "--to-pdf",
        action="store_true",
        help="Update references to use .pdf format."
    )
    parser.add_argument(
        "--to-svg",
        action="store_true",
        help="Update references to use .svg format."
    )

    args = parser.parse_args()

    # Ensure only one mode is selected
    if args.to_pdf == args.to_svg:
        parser.error("Must set conversion flag: specify either --to-pdf or --to-svg (not both).")

    # Process the directory
    process_directory(
        source_dir=args.directory,
        to_format=ImageFormat.PDF if args.to_pdf else ImageFormat.SVG
    )
