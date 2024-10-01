CHROME ?= brave

extension.crx: $(addprefix extension/, manifest.json worker.js) extension.pem
	$(CHROME) --pack-extension=extension --pack-extension-key=extension.pem

extension.pem:
	$(CHROME) --pack-extension=extension
