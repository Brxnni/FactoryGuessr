import  os
import  winsound
from	pynput import keyboard

from	makePanorama import main as makePanorama

def makeScreenshot(screenshotsDirPath: str, finalSize: tuple[int]) -> None:

	print(
"""
----- 
IMPORTANT:
* /pano res 2048
* /pano dir "D:/Programming/Python/SatisfactoryGeoguessrLike/tools/screenshots"
----- 
"""
	)

	screenshotsDirPath = os.path.abspath(screenshotsDirPath)
	screenshots = os.listdir(screenshotsDirPath)

	# Check if all 6 images are there
	if not all([
		f"Pano{sideName}.png" in screenshots
		for sideName in ["Up", "Left", "Front", "Right", "Back", "Down"]
	]):
		print("Couldn't find all required Pano images!")
		return

	subDirectoryPaths = [p[0] for p in os.walk(screenshotsDirPath)]

	# All sub dirs should be named after ints
	i = 1
	while True:
		dirPath = f"{screenshotsDirPath}\\{i}.png"
		if not os.path.exists(dirPath):
			
			# Create panorama image
			makePanorama(screenshotsDirPath, f"{screenshotsDirPath}\\{i}.png", finalSize)
		
			# Delete six side images
			for sideName in ["Up", "Left", "Front", "Right", "Back", "Down"]:
				# os.rename(
					# f"{screenshotsDirPath}\\Pano{sideName}.png",
					# f"{screenshotsDirPath}\\{i}\\Pano{sideName}.png"
				# )
				os.remove(f"{screenshotsDirPath}\\Pano{sideName}.png")
		
			break
		
		else:
			i += 1

def onPress(key: str or keyboard.Key) -> None:
    
	print(key)
	if key == keyboard.Key.shift_r:
		# Make screenshot
		makeScreenshot(".\\screenshots", (8192, 4096))
		
		# Play sound when done (usually takes 5-10 seconds)
		winsound.PlaySound(sound, flags)

def main() -> None:

	# Take screenshot every time i press the right shift key
	listener = keyboard.Listener(on_press = onPress)
	listener.start()
	listener.join()

if __name__ == "__main__": main()