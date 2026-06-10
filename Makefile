# Paths
SOURCE_FILE = source/main.ptx
VERBOSITY = DEBUG

# Targets
.PHONY: help setup upgrade clean all web pdf view

# Local environment set up
setup:
	pip install -r requirements.txt

# clean: Clean up generated/cached files
clean:
	# Clean up any generated files
	rm -rf .cache
	rm -rf generated-assets
	rm -rf output
	rm -rf logs

# Default target: build the pdf and web version and display local
all: pdf web view

# Build the web version of the project
web:
	pretext --verbosity=$(VERBOSITY) build web --clean --generate --input=$(SOURCE_FILE)

# Build deployable web version of the project
deploy:
	pretext --verbosity=$(VERBOSITY) build web --clean --generate --deploys --input=$(SOURCE_FILE)

# Stage the deployable web version of the project
stage:
	pretext --verbosity=$(VERBOSITY) deploy --stage-only

# Generate the PDF version of the project
pdf:
	pretext --verbosity=$(VERBOSITY) build print --clean --generate --input=$(SOURCE_FILE)

# View the project in a web browser
view:
	pretext view

# upgrade pretext to latest version
upgrade:
	pretext upgrade
	pretext --version

# Creates the intermediate LaTeX files used in making the PDF
latex:
	pretext build latex --clean --generate --input=$(SOURCE_FILE)

# Display help dynamically
help:
	@clear
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-15s %s\n", $$1, $$2}'
	@echo
	@echo "Default target: make all"

# Add comments for dynamic help
setup:				 ## set up local environment
clean: 				 ## Clean up generated/cached files
all: pdf web view    ## Build the web version (default target)
web:                 ## Build the web version of the project
deploy:              ## Build deployable web version of the project
stage:			   	 ## Stage the deployable web version
view:                ## View the project in a web browser
pdf:                 ## Generate the PDF version of the project
upgrade:			 ## Upgrade PRETEXT to latest version
latex:               ## Generates the intermediate LaTeX used in the PDF compilation
help:				 ## Display current help
