import Color from './Color'
import ColorsRow from './ColorsRow'

const Colors = () => {
  return (
    <div className="w-[60rem] flex flex-col gap-6">
      <ColorsRow title="blues">
        <Color className="bg-primary-light" name="primary-light" hex="#b3d4ff" />
        <Color className="bg-primary-main" name="primary-main" hex="#3f7de8" />
        <Color className="bg-primary-dark" name="primary-dark" hex="#125ad5" />
        <Color className="bg-primary-night" name="primary-night" hex="#0747a6" />
      </ColorsRow>
      <ColorsRow title="purples">
        <Color className="bg-primary-purples-pixie" name="primary-purples-pixie" hex="#cc99ff" />
        <Color className="bg-primary-purples-bell" name="primary-purples-bell" hex="#c226fb" />
        <Color className="bg-primary-purples-witch" name="primary-purples-witch" hex="#9933cc" />
        <Color className="bg-primary-purples-acai" name="primary-purples-acai" hex="#4f0e87" />
      </ColorsRow>
      <ColorsRow title="greens">
        <Color className="bg-primary-greens-mint" name="primary-greens-mint" hex="#90e6bc" />
        <Color className="bg-primary-greens-true" name="primary-greens-true" hex="#21cc79" />
        <Color
          className="bg-primary-greens-aligator"
          name="primary-greens-aligator"
          hex="#008767"
        />
        <Color className="bg-primary-greens-forest" name="primary-greens-forest" hex="#0a6045" />
      </ColorsRow>
      <ColorsRow title="pinks">
        <Color className="bg-primary-pinks-yogurt" name="primary-pinks-yogurt" hex="#fdacc5" />
        <Color
          className="bg-primary-pinks-watermelon"
          name="primary-pinks-watermelon"
          hex="#fb5a8b"
        />
        <Color className="bg-primary-pinks-barbie" name="primary-pinks-barbie" hex="#aa398d" />
        <Color className="bg-primary-pinks-blush" name="primary-pinks-blush" hex="#821a67" />
      </ColorsRow>
      <ColorsRow title="oranges">
        <Color className="bg-primary-oranges-sunset" name="primary-oranges-sunset" hex="#ffb186" />
        <Color className="bg-primary-oranges-carrot" name="primary-oranges-carrot" hex="#ff6e1d" />
        <Color
          className="bg-primary-oranges-doritos"
          name="primary-oranges-doritos"
          hex="#c64026"
        />
        <Color className="bg-primary-oranges-clay" name="primary-oranges-clay" hex="#8e3925" />
      </ColorsRow>
      <ColorsRow title="yellows">
        <Color className="bg-primary-yellows-corn" name="primary-yellows-corn" hex="#fff6a8" />
        <Color className="bg-primary-yellows-sun" name="primary-yellows-sun" hex="#ffec03" />
        <Color
          className="bg-primary-yellows-guarana"
          name="primary-yellows-guarana"
          hex="#b2b229"
        />
        <Color className="bg-primary-yellows-moss" name="primary-yellows-moss" hex="#757010" />
      </ColorsRow>
      <ColorsRow title="reds">
        <Color className="bg-extend-reds-flower" name="extend-reds-flower" hex="#ffa5a5" />
        <Color className="bg-extend-reds-delete" name="extend-reds-delete" hex="#ff4c4c" />
        <Color className="bg-extend-reds-lipstick" name="extend-reds-lipstick" hex="#a01c2c" />
        <Color className="bg-extend-reds-dragon" name="extend-reds-dragon" hex="#6a2026" />
      </ColorsRow>
      <ColorsRow title="browns">
        <Color className="bg-extend-browns-sand" name="extend-browns-sand" hex="#ffd29e" />
        <Color className="bg-extend-browns-cheetos" name="extend-browns-cheetos" hex="#f6a721" />
        <Color className="bg-extend-browns-sphinx" name="extend-browns-sphinx" hex="#d78935" />
        <Color className="bg-extend-browns-wood" name="extend-browns-wood" hex="#845d37" />
      </ColorsRow>
      <ColorsRow title="grays">
        <Color className="bg-extend-grays-moon" name="extend-grays-moon" hex="#d1d3d4" />
        <Color className="bg-extend-grays-elevator" name="extend-grays-elevator" hex="#a7a9ac" />
        <Color className="bg-extend-grays-street" name="extend-grays-street" hex="#6d6f71" />
        <Color
          className="bg-extend-grays-blackwidow"
          name="extend-grays-blackwidow"
          hex="#000000"
        />
      </ColorsRow>
      <ColorsRow title="disabled blues">
        <Color className="bg-disabled-bg" name="disabled-bg" hex="#e8f2ff" />
        <Color className="bg-hover-light" name="hover-light" hex="#d1e3fa" />
        <Color className="bg-disabled-text" name="disabled-text" hex="#637798" />
      </ColorsRow>
      <ColorsRow title="disabled reds">
        <Color className="bg-disabled-delete" name="disabled-delete" hex="#fccccc" />
        <Color className="bg-disabled-error" name="disabled-error" hex="#da7a7a" />
        <Color className="bg-disabled-wrong" name="disabled-wrong" hex="#ba5a5a" />
      </ColorsRow>
      <ColorsRow title="dark">
        <Color className="bg-neutral-dark-eclipse" name="neutral-dark-eclipse" hex="#0a0f1a" />
        <Color className="bg-neutral-dark-onix" name="neutral-dark-onix" hex="#1a2437" />
        <Color className="bg-neutral-dark-suit" name="neutral-dark-suit" hex="#212a3c" />
        <Color className="bg-neutral-dark-ico" name="neutral-dark-ico" hex="#192438" />
        <Color className="bg-neutral-dark-city" name="neutral-dark-city" hex="#202c44" />
        <Color className="bg-neutral-dark-skate" name="neutral-dark-skate" hex="#233049" />
        <Color className="bg-neutral-dark-desk" name="neutral-dark-desk" hex="#3a4a65" />
        <Color className="bg-neutral-dark-rooftop" name="neutral-dark-rooftop" hex="#505f79" />
      </ColorsRow>
      <ColorsRow title="medium">
        <Color
          className="bg-neutral-medium-elephant"
          name="neutral-medium-elephant"
          hex="#6e7b91"
        />
        <Color className="bg-neutral-medium-cloud" name="neutral-medium-cloud" hex="#8ca0b3" />
        <Color className="bg-neutral-medium-silver" name="neutral-medium-silver" hex="#b9cbd3" />
        <Color className="bg-neutral-medium-wave" name="neutral-medium-wave" hex="#d2dfe6" />
      </ColorsRow>
      <ColorsRow title="light">
        <Color className="bg-neutral-light-box" name="neutral-light-box" hex="#e7edf4" />
        <Color className="bg-neutral-light-whisper" name="neutral-light-whisper" hex="#f3f6fa" />
        <Color className="bg-neutral-light-breeze" name="neutral-light-breeze" hex="#f8fbfb" />
        <Color className="bg-neutral-light-snow" name="neutral-light-snow" hex="#ffffff" />
      </ColorsRow>
    </div>
  )
}

export default Colors
