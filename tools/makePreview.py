import	os
import	cv2
from	lib.equirec2perspec import Equirectangular

def convert(options: dict, fileInputPath: str, fileOutputPath: str) -> None:
    
    fileInputPath, fileOutputPath = map(os.path.abspath, [fileInputPath, fileOutputPath])
    
    # This library works so fucking well, you don't even notice
    # the difference between the preview and the first frame of
    # the panorama except for the resolution
    # MASSIVE thanks to @fuenwang
    eq = Equirectangular(fileInputPath)
    
    perspective = eq.GetPerspective(**options)
    cv2.imwrite(fileOutputPath, perspective)

convert(
    # Theta ^= Left/Right angle, Phi ^= Up/Down angle (°)
    {"FOV": 120, "THETA": 0, "PHI": 0, "height": 480, "width": 854}, 
	"./screenshots/6.png", 
	"./../src/game/Preview.png"
)