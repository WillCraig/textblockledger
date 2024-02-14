# Text Block Ledger

simple site that takes string input in the textbox and displays the total value of all USD values found.

## Why

Beats me

### Limitations

ACCEPTABLE VALUE:

- `$199`
- `$1.99`

NOT ACCEPTABLE VALUE:

- `$1,000`
- `$1,000.00`
- `$ 1.00`

#### sample text

from [reddit post](https://www.reddit.com/r/climbing/comments/93hko4/comment/e3dmu9j/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)

```Steep and cheap. / $30 wild country rocks 1-8/ $53 dmm offsets/ $464. Dmm dragon 2s. 8 cams (Bd .3-4 equivalent)/ $10 nut tool

Mtnoutlet.com $50 10 shoulder length slings $20 2 double length slings

Gear express $150 30 nonlockers $26. 4 small lockers

So $800 added onto your sport gear of draws, belay device, harness, shoes, chalkbag. This gets you a "minimal single rack". After about 1 year with this you'd probably want to add

Backcountry $730 camalot package .3-#6 $120 offset brass nuts $100 black totem $25. Pink tricam

This gets you to a full fledged rack and will get you up durn near everything.
```

I would adjust and remove the line that contains $800 for my use. or just remove the "$" to ignore the value.

## Dev running

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
