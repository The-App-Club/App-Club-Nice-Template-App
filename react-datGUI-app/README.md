- https://github.com/claus/react-dat-gui
- https://codesandbox.io/s/react-dat-gui-emjcf
- https://dev.to/zhnedyalkow/the-easiest-way-to-patch-your-npm-package-4ece

@tim-soft/react-dat-gui のローカルパッチの当て方

#1

before

```
783:color.isValidHex
```

after

```
783:isValidHex
```

#2

before

```
20:import color from 'react-color/lib/helpers/color';
```

after

```
20:import {isValidHex} from 'react-color/lib/helpers/color';
```

上記対応後、パッチ当てて依存関係組み立てなおし

```bash
yarn add patch-package postinstall-postinstall --dev
yarn add -D patch-package
yarn patch-package @tim-soft/react-dat-gui
yarn install
```
