# `@squarecoders/emoji-mart-react`

A React wrapper for [EmojiMart](https://missiveapp.com/open/emoji-mart).

## 🧑‍💻 Usage
```sh
npm install --save emoji-mart @emoji-mart/data @squarecoders/emoji-mart-react
```

```js
import data from '@emoji-mart/data'
import Picker from '@squarecoders/emoji-mart-react'

function App() {
  return (
    <Picker data={data} onEmojiSelect={console.log} />
  )
}
```

## 📚 Documentation
See https://github.com/missive/emoji-mart#react
