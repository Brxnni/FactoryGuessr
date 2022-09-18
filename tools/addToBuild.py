import	os

def main() -> None:
    
	path = os.path.abspath(os.path.dirname(__file__))
	gamePath = os.path.abspath(os.path.join(path, "..", "website-src", "static-src", "game"))
	panoramasPath = os.path.abspath(os.path.join(path, "..", "website-src", "build", "game", "panoramas"))
    
	with open(f"{gamePath}/main.js", "r") as file:
		txt = file.read()
    
	with open(f"{path}/finalData.json", "r") as file:
		j = file.read()

	j = j.replace("\n", "\n\t")
	txt = txt.replace("\"$$JSON$$\"", j)

	with open(f"{gamePath}/main.js", "w") as file:
		file.write(txt)

	for file in os.listdir(f"{path}/screenshots"):
		if file.endswith(".png"):
			print("copy " + f"{path}\\screenshots\\{file}" + " " + f"{panoramasPath}\\{file}")
			os.system("copy " + f"{path}\\screenshots\\{file}" + " " + f"{panoramasPath}\\{file}")

if __name__ == "__main__": main()