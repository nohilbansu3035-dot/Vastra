import sys
from PIL import Image

def remove_white_bg(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Change all white (also shades of white)
            if item[0] > 230 and item[1] > 230 and item[2] > 230:
                # To prevent white halos, we can make semi-transparent for values near 230
                # But simple binary works okay for most flat-ish icons
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Saved {output_path} successfully.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    remove_white_bg('public/macbook-folder.png', 'public/macbook-folder-transparent.png')
