import os

folder_path = './css/Demo_Fonts/'
output_file = 'fonts.txt'

with open(output_file, 'w') as f:
    for filename in os.listdir(folder_path):
        if filename.endswith('.otf'):
            font_name = filename.rsplit('-', 2)[-2:]
            font_name = "-".join(font_name)
            font_name = font_name.rsplit('.', 1)[0]
            font_family = f"font-family: \"{font_name}\";\n"
            src = f"  src: url(\"./Demo_Fonts/{filename}\") format('embedded-opentype'),\n"
            src += "    /* Internet Explorer */\n"
            src += f"    url(\"./Demo_Fonts/{filename}\") format('woff2'),\n"
            src += "    /* Super Modern Browsers */\n"
            src += f"    url(\"./Demo_Fonts/{filename}\") format('woff2'),\n"
            src += "    /* Pretty Modern Browsers */\n"
            src += f"    url(\"./Demo_Fonts/{filename}\") format('truetype'),\n"
            src += "    /* Safari, Android, iOS */\n"
            src += f"    url(\"./Demo_Fonts/{filename}\") format('svg');\n"
            src += "    /* Legacy iOS */\n"
            f.write(font_family + src)
