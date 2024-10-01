chrome.commands.onCommand.addListener(async (command) => {
	if (command === "Read later") {
		let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
		console.log(tab)
		chrome.readingList.addEntry({
			title: tab.title,
			url: tab.url,
			hasBeenRead: false,
		})
	}
})
