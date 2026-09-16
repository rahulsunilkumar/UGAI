"""Render the generic sharing image locally; no source content is included."""
from pathlib import Path
import argparse
from PIL import Image, ImageDraw, ImageFont

parser=argparse.ArgumentParser()
parser.add_argument('--font',required=True,help='Path to a TrueType font, e.g. Arial.ttf')
args=parser.parse_args()
root=Path(__file__).resolve().parents[1]
im=Image.new('RGB',(1200,630),'#fbf9fd');d=ImageDraw.Draw(im)
d.rectangle((0,0,17,630),fill='#a100ff')
d.text((80,65),'MRO',font=ImageFont.truetype(args.font,32),fill='#8700c8')
d.text((76,188),'Operations Guide',font=ImageFont.truetype(args.font,88),fill='#19151e')
d.text((81,317),'Procedures. Reference. Practice.',font=ImageFont.truetype(args.font,34),fill='#695975')
d.line((82,453,1118,453),fill='#dacbe5',width=2)
d.text((82,490),'A clearer way through maintenance operations.',font=ImageFont.truetype(args.font,26),fill='#695975')
im.save(root/'dist/assets/share-card.png',optimize=True)
print('Created generic 1200 × 630 sharing image.')
