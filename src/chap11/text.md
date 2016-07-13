## Composability

- ReactはComponent単位で画面の部品を作っていきます
- ComponentはHTMLのようにツリー構造で組み合わせることができます．
こうして画面を組み立てていきます

## Props
- Componentには外部からpropsを与えることができます
```:js
class Name extends Component {
  render() {
    const name = this.props.name;

    return <span>{ name }</span>
  }
}
```

```
<Name name={ name } />
```

## State
- Componentの内部状態を保持するためにstateを使います
- **state はImmutableです．** 直接`this.state`を変更してはいけません．
```
this.state.hoge = 'new data';  // ダメ

this.setState({
    hoge: 'new data',
});  // OK
```

- input要素の内容はstateで保持することで，他の場所で使えて便利です．
    - `onChange`でListenして，値が変更されるたびに`this.setState()`します．
