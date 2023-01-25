import os
fontFolders = ['Alegreya', 'lato', 'loew']
output_file = 'fonts.txt'

with open('./css/fonts/fonts.txt', 'w') as f:
    for folder in fontFolders:
        for filename in os.listdir('./css/fonts/' + folder + '/'):
            if filename.endswith('.otf'):
                font_name = filename.rsplit('-', 2)[-2:]
                font_name = "-".join(font_name)
                font_name = font_name.rsplit('.', 1)[0]
            if filename.endswith('.ttf'):
                font_name = filename.split('.')[0]
            font_family = f"font-family: \"{font_name}\";\n"
            src = f"  src: url(\"./fonts/{folder}/{filename}\") format('embedded-opentype'),\n"
            src += "    /* Internet Explorer */\n"
            src += f"    url(\"./fonts/{folder}/{filename}\") format('woff2'),\n"
            src += "    /* Super Modern Browsers */\n"
            src += f"    url(\"./fonts/{folder}/{filename}\") format('woff2'),\n"
            src += "    /* Pretty Modern Browsers */\n"
            src += f"    url(\"./fonts/{folder}/{filename}\") format('truetype'),\n"
            src += "    /* Safari, Android, iOS */\n"
            src += f"    url(\"./fonts/{folder}/{filename}\") format('svg');\n"
            src += "    /* Legacy iOS */\n"
            f.write("@font-face {\n" + font_family + src + "}\n\n")
