import React, { Component } from 'react';

import App from './App';

export default class extends Component {
  render() {
    return (
      <div>
        <h2>Composability</h2>

        <App />

        <section>
          <h3>このサンプルのポイント</h3>
          <ul>
            <li>Component単位で画面の部品をつくる</li>
            <li>Componentをツリー構造で組み合わせて画面をつくる</li>
            <li>Componentには外部からpropsを与えられる</li>
            <li>Componentの内部状態を保持するためにstateを使う</li>
            <li>input要素の内容はstateで保持する</li>
          </ul>
        </section>
      </div>
    );
  }
}
