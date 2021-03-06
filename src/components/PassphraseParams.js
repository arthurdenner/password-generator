import React from 'react';
import styled from 'styled-components';
import InputRow from 'components/common/InputRow';
import RangeSlider from 'components/common/RangeSlider';
import RadioButton from 'components/common/RadioButton';
import config from 'config';
import { media } from 'styles/helpers';

const Styles = styled.div`
  padding: 2rem;
  .radios {
    > div {
      flex-basis: 50%;
      margin-right: 0;
    }
  }
  ${media.tablet`    
  .radios {
    > div {
      flex-basis: auto;
      margin-right: 3rem;
    }
  }
  `}
`;

const Slider = styled(RangeSlider)`
  ${media.tablet`
    width: 70%;
  `}
`;

export default function PassphraseParams({ values, onChange }) {
  const { modes } = config;
  const ppValues = values[modes.PP];

  return (
    <Styles>
      <p>
        Long passphrases are easy to remember (and type!) and are often just as secure as
        a random string of characters, especially when they're longer than a password
        would be. Makes a great choice for your "master" password.
      </p>
      <InputRow>
        <Slider
          label="Word count"
          name="length"
          value={ppValues.length}
          min={3}
          max={8}
          onChange={onChange}
          title="Adjust word count"
        />
      </InputRow>
      Delimiter
      <InputRow className="radios">
        <RadioButton
          label="Hyphen"
          name="delimiter"
          value="hyphen"
          checked={ppValues.delimiter === 'hyphen'}
          onChange={onChange}
          title="Separate words with hyphens"
        />
        <RadioButton
          label="Space"
          name="delimiter"
          value="space"
          checked={ppValues.delimiter === 'space'}
          onChange={onChange}
          title="Separate words with spaces"
        />
        <RadioButton
          label="Period"
          name="delimiter"
          value="period"
          checked={ppValues.delimiter === 'period'}
          onChange={onChange}
          title="Separate words with periods"
        />
        <RadioButton
          label="123"
          name="delimiter"
          value="number"
          checked={ppValues.delimiter === 'number'}
          onChange={onChange}
          title="Separate words with a number"
        />
      </InputRow>
    </Styles>
  );
}
