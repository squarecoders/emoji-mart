// @ts-nocheck
import React, { useEffect, useRef } from 'react'
import { Picker } from 'emoji-mart'

export default function EmojiPicker(props) {
  // React 19 passes `ref` through as a regular prop on function components.
  // Keep it out of the props forwarded to the Picker instance.
  const { ref: _ref, ...pickerProps } = props
  const ref = useRef(null)
  const instance = useRef(null)

  // Push prop changes to the existing Picker after commit rather than during
  // render, so concurrent rendering / StrictMode double renders stay pure.
  useEffect(() => {
    if (instance.current) {
      instance.current.update(pickerProps)
    }
  })

  useEffect(() => {
    instance.current = new Picker({ ...pickerProps, ref })

    return () => {
      instance.current = null
    }
  }, [])

  return React.createElement('div', { ref })
}
