import os
fontFolders = ['Alegreya', 'lato', 'loew']
with open('fontname.txt','w') as f:
    for folder in fontFolders:
        for filename in os.listdir('./css/'+folder+'/'):
            if filename.endswith('.otf'):
                font_name = filename.rsplit('-', 2)[-2:]
                font_name = "-".join(font_name)
                font_name = font_name.rsplit('.', 1)[0]
            if filename.endswith('.ttf'):
                font_name = filename.split('.')[0]
            
            f.write(font_name + '\n')
