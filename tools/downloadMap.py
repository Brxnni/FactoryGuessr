import  os
import  sys
import  math
import  time
import  requests

def main() -> None:
    
    count = 0
    total = sum([ (5*2**(z-3)) ** 2 for z in range(3, 8) ])
    
    # Loop through LeafletJS zoom levels
    for z in range(3, 5):
        
        for x in range(5*2**(z-3)):
            for y in range(5*2**(z-3)):
                
                # Make urls for SFCalc and local
                calcUrl = f"https://static.satisfactory-calculator.com/imgMap/gameLayer/Experimental/{z}/{x}/{y}.png"
                localUrl = f"../src/public/map_TEST/{z}/{x}"
                
                while True:
                    try:
                        r = requests.get(calcUrl)
                        break
                    except:
                        time.sleep(0.5)
                
                # Yay! We have a png
                if r.status_code == 200:
                    
                    # If path to file doesn't exist, create it
                    if not os.path.exists(localUrl):
                        os.makedirs(localUrl)
                    
                    with open(f"{localUrl}/{y}.png", "w+b") as file:
                        file.write(r.content)
                    
                    count += 1
                    
                    # Progress bar
                    sys.stdout.write("\r")
                    sys.stdout.write("["+ "="*math.floor(count/(total/20)) + " "*math.ceil((total-count)/(total/20)) + "] " + str(round(count / total * 100, 2)) + "%")
                    sys.stdout.flush()

                elif r.status_code == 404:
                    break

if __name__ == "__main__": main()