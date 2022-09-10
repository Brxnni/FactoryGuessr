import  os
import  numpy
import  py360convert
from    PIL import Image

def sidesToFlattenedCubic(inputDirectoryPath: str) -> Image.Image:

    # Make absolute path
    inputDirectoryPath = os.path.abspath(inputDirectoryPath)

    # Read image files for each side
    images = []
    
    # Order is important here \/
    for sideName in ["Up", "Left", "Front", "Right", "Back", "Down"]:
        print(f"Reading Pano{sideName}.png...")
        try:
            images.append(Image.open(f"{inputDirectoryPath}\\Pano{sideName}.png"))
        except:
            print(f"Couldn't find file Pano{sideName}.png!")
            return
        
    # (Assuming all images are squares of the same size),
    # Read size of all images
    size = images[0].size[0]
    
    # Create image to put everything onto
    stitched = Image.new("RGB", (size * 4, size * 3))
    
    # Add each image individually
    print("Stitching Image #0..."); stitched.paste(images[0], (size, 0))
    print("Stitching Image #1..."); stitched.paste(images[1], (0, size))
    print("Stitching Image #2..."); stitched.paste(images[2], (size, size))
    print("Stitching Image #3..."); stitched.paste(images[3], (size * 2, size))
    print("Stitching Image #4..."); stitched.paste(images[4], (size * 3, size))
    print("Stitching Image #5..."); stitched.paste(images[5], (size, size * 2))
    
    # Return image as flattened cubic map
    # (Saving is not important, because it's used by the same function immediately anyway)
    return stitched

def flattenedCubicToEquirectangular(cubicMap: Image.Image, outputFilePath: str, finalSize: tuple[int]) -> None:
    """
    Takes flattened cubic map as PIL Image as converts it to equirectangular image
    and saves it as {outputFilePath}.
    See this image: https://github.com/sunset1995/py360convert/blob/master/assert/teaser_convertion.png
    """
    
    # Re-calculate size
    size = int(cubicMap.size[0] / 4)
    
    # Read image as numpy array
    cubicMapArray = numpy.array(cubicMap)
    
    # Convert image from flattened cubic to equirectangular
    print("Converting to Equirectangular...")
    eqMapArray = py360convert.c2e(
        cubemap = cubicMapArray,
        h = 2 * size,
        w = 4 * size,
        mode = "nearest" # This prevents blurring when resizing to bigger image
    ).astype(numpy.uint8)
    
    # Convert image from numpy array to image
    print("Saving final image...")
    eqMap = Image.fromarray(eqMapArray, mode = "RGB")
    
    # Resize image with "nearest neighbour" mode
    eqMap = eqMap.resize(finalSize, Image.NEAREST)
    
    # Save image
    eqMap.save(outputFilePath)

def main(inputDirectoryPath: str, outputFilePath: str, finalSize: tuple[int]) -> None:

    cubic = sidesToFlattenedCubic(inputDirectoryPath)
    flattenedCubicToEquirectangular(cubic, outputFilePath, finalSize)

# if __name__ == "__main__": main(".\\screenshots\\2", ".\\screenshots\\2\\Final.png")