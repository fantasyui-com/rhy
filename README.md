# rhy
Unix Command Line Utility For Finding Rhymes

## Installation

```sh
npm -g i rhy
```

## Usage

```sh
rhy pounce
```

- bounce
- counce
- crounse
- flounce
- mounce
- ounce
- trounce
- younce



## Show Only Popular Words
add **-p**/**--popular** flag

```sh
rhy -p cat
rhy --poular cat
```
- that
- at
- chat
- sat
- fat
- flat
- hat
- matt
- vat
- pat
- lat
- rat
- mat
- stat
- bat
- nat
- dat

## Show Only Top Ranked Words

Search for a rhyme among 1000 most popular words in English language.

add **-r 1000**/**--rank 1000** argument

```sh
rhy cat -r 1000
rhy cat --rank 1000
```


- that
- at
- chat

Finding rhymes for word **cat**

```sh
rhy cat
```

- that
- at
- chat
- sat
- fat
- flat
- hat
- matt
- vat
- pat
- lat
- rat
- mat
- stat
- bat
- nat
- dat
- batt
- batte
- bhatt
- blatt
- brat
- bratt
- catt
- flatt
- gat
- gatt
- glatt
- gnat
- hatt
- hnat
- jagt
- kat
- katt
- klatt
- krat
- kratt
- matte
- patt
- platt
- platte
- pratt
- pratte
- ratte
- scat
- schadt
- shatt
- slaght
- slat
- spat
- splat
- spratt
- tat

Finding rhymes for word **kitten**

```sh
rhy kitten
```
- written
- britain
- bitten
- bitton
- briton
- brittain
- brittan
- britten
- britton
- ditton
- fitton
- gettin'
- gritton
- litten
- litton
- lytton
- mittan
- mitten
- mitton
- ryton
- sittin'
- sitton
- smitten
- titone
- whiton
- whitten
- whitton
- witten
- witton


## Tips and Tricks

### Only the top word: Use head -n 1

```sh
rhy kitten | head -n 1
```

```yaml
written
```

### Only the top three words: Use head -n 3

```sh
rhy kitten | head -n 3
```

```yaml
written
britain
bitten
```

### Neat Formatting: Use the column command on unix

```sh
rhy kitten | column
```

```yaml
written		bitton		brittan		ditton		gritton		lytton		mitton		sitton		whiton		witten
britain		briton		britten		fitton		litten		mittan		ryton 		smitten		whitten		witton
bitten		brittain	britton		gettin'		litton		mitten		sittin'		titone		whitton
```
