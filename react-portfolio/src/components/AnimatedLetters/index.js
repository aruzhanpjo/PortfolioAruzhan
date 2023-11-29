import './index.scss';

//first is a class we want to apply to each letter
//second is the string we want to animate
//third is the index of the string we want to animate

const AnimatedLetters = ( { letterClass, strArray, idx}) => {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`$letterClass _${i + idx}`}>
                        {char}
                    </span>

                ))
            }
        </span>
    )
};

export default AnimatedLetters;