import  os
import	sys
import	json
from    PIL import Image
from	pynput import keyboard

def makePanorama(screenshotsDirPath: str, finalSize: tuple[int]) -> None:

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
	i = 0
	while True:
		dirPath = f"{screenshotsDirPath}\\{i}.png"
		if not os.path.exists(dirPath):
			
			# Create panorama image
			os.system("hugin_executor --stitching ./screenshots/HuginStitcher.pto")
			os.rename(f"{screenshotsDirPath}\\PanoBack - PanoUp.png", dirPath)

			# Resize panorama image
			if finalSize != (4096, 2048):
				img = Image.open(dirPath)
				img = img.resize(finalSize)
				img.save(dirPath)

			# Ask user for coords
			while True:
				i = input("Please enter coordinates where the image was taken: (x,y) ")
				try:
					x, y = i.split(",")
					x, y = float(x.strip()), float(y.strip())
					break
				except: ...

			# Add panorama to json
			with open("./finalData.json", "r") as file:
				j = json.loads(file.read())

			j.append({
				"id": i,
				"imgUrl": f"./panoramas/{0}.png",
				"previewUrl": "",
				"coords": [x, y]
			})

			with open("./finalData.json", "w") as file:
				file.write(json.dumps(j, indent = 2))
    
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
    
	if key == keyboard.Key.shift_r:
		# Make screenshot
		makePanorama(".\\screenshots", (4096, 2048))
		
		# Say "Done" when done (usually takes 5-10 seconds)
		print("Done!")
	if key == keyboard.Key.esc:
		sys.exit(0)

def main() -> None:

	print(
"""
----- 
IMPORTANT:
* /pano res 2048
* /pano dir "D:/Programming/Websites/FactoryGuessr/tools/screenshots"
----- 
"""
	)

	# Take screenshot every time i press the right shift key
	listener = keyboard.Listener(on_press = onPress)
	listener.start()
	listener.join()

if __name__ == "__main__": main()