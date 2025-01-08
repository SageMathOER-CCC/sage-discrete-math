# Define the directory containing the SVG files
SVG_DIR := assets

# Find all SVG files recursively in the assets directory
SVG_FILES := $(shell find $(SVG_DIR) -type f -name '*.svg')

# Create a list of PDF files by replacing the .svg extension with .pdf
PDF_FILES := $(SVG_FILES:.svg=.pdf)

# Check if Inkscape is available and print its version
INKSCAPE := $(shell command -v inkscape)
ifeq ($(INKSCAPE),)
$(error "Inkscape is required but is not installed or not on the PATH.")
else
INKSCAPE_VERSION := $(shell inkscape --version)
endif

## svg-to-pdf:	Run the full pipeline: check inkscape, clean generated PDFs, and convert SVGs to PDFs
svg-to-pdf: check-inkscape clean convert

# Verify Inkscape installation and display its version
check-inkscape:
	@echo "Using Inkscape: $(INKSCAPE_VERSION)"

# Remove all generated PDF files in the assets directory
clean:
	@echo "Cleaning up generated PDF files..."
	find $(SVG_DIR) -type f -name '*.pdf' -exec rm -f {} +
	@echo "Cleanup complete."

# Convert all SVG files in the assets directory to PDFs
convert: $(PDF_FILES)

# Pattern rule to convert a single SVG to a PDF
%.pdf: %.svg
	@echo "Converting $< to $@..."
	$(INKSCAPE) -o $@ $<

## help:		Display this help message
help:
	@echo "Makefile for converting SVG files to PDF using Inkscape"
	@echo
	@echo "Available targets:"
	@awk '/^##/ {print substr($$0, 4)}' $(MAKEFILE_LIST) | sort
