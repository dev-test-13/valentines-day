import {useEffect, useRef, useState} from "react";
import Button from "../UI/button/Button.jsx";
import stylesButton from '../UI/button/Button.module.css';
import styles from './App.module.css';
import catsKissing from "../../assets/cats-kissing.gif";
import catDancing from '../../assets/cat-dancing.gif';
import sleepCat from '../../assets/sleep-cat.gif';
import fightCat from '../../assets/fight-cat.gif';
import gunCat from '../../assets/gun.gif';
import angryCat from '../../assets/angry-cat.gif';
import catHeartEyes from '../../assets/cat-heart-eyes.gif'
import whiteCatsKissing from '../../assets/white-cats-kissing.gif'
import kiss from '../../assets/kiss.gif';
import diasha from '../../assets/diasha.png';
import beautifulGirl from '../../assets/beautiful-girl.jpg';
import firstPhoto from '../../assets/first-photo.jpg';
import togetherFirst from '../../assets/together-first.jpg';
import togetherSecond from '../../assets/together-second.jpg';
import togetherLast from '../../assets/together-last.jpg';
import finalProposal from '../../assets/final-proposal.jpg';

const App = () => {
    const [status, setStatus] = useState('initial');
    const [count, setCount] = useState(0);
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');
    const [footerText, setFooterText] = useState('');
    const [loveRangeMe, setLoveRangeMe] = useState(0);
    const [loveRangeYou, setLoveRangeYou] = useState(0);
    const [togetherText, setTogetherText] = useState('');
    const [checkedRadio, setCheckedRadio] = useState('no');
    const refButtonNo = useRef(null);
    const refButtonYes = useRef(null);

    useEffect(() => {
        if (status === 'initial') {
            setTopText('Доброго ранку, моя кицюня♥️');
            setBottomText('Знайди та натисти на себе😏');
        } else if (status === 'find-yourself') {
            setTopText('Хотів у тебе спитати, ти будеш моєю Валентинкою?😍');
            setBottomText('');
            setFooterText('');
        } else if (status === 'she-say-yes') {
            setTopText('Точно?');
            setBottomText('');
            setFooterText('');
        } else if (status === 'she-say-no') {
            setTopText('Альо, ти що там задумала? У тебе є друга спроба!!!');
            setBottomText('');
            setFooterText(`Рахую до трьох: ${count}`);
        } else if (status === 'one-more-time-first') {
            setTopText('Ти впевнена?');
            setBottomText('');
            setFooterText('');
        } else if (status === 'one-more-time-second') {
            setTopText('Точно?');
            setBottomText('');
            setFooterText('Спробуй ще)');
        } else if (status === 'one-more-time-last') {
            setTopText('Точно?');
            setBottomText('');
            setFooterText('Не вірно)');
        } else if (status === 'angry') {
            setTopText('Хтось напевно вже дуже злий?😂');
            setBottomText('');
            setFooterText('');
        } else if (status === 'i-love-you') {
            setTopText('Я хотів тобі сказати, що я тебе дуже КОХАЮЮЮЮ❤️');
            setBottomText('А ти мене кохаєшь?🥺');
            setFooterText('');
        } else if (status === 'question-love-me') {
            setTopText('Як ти вважаєшь, на скільки сильно я тебе кохаю?')
            setBottomText('');
            setFooterText('');
        } else if (status === 'question-love-you') {
            setTopText('А на скільки сильно ти мене кохаєшь?')
            setBottomText('');
            setFooterText('');
        } else if (status === 'beautiful-girl') {
            setTopText('Дивись яка ти красуня!!!');
            setBottomText('');
            setFooterText('');
        } else if (status === 'first-photo') {
            setTopText('Це наше перше фото👩🏻‍❤️‍👨🏻');
            setBottomText('Cute?');
            setFooterText('');
        } else if (status === 'together-first') {
            setTopText('А це ми з тобою цьомаємось💋');
            setBottomText('Гарні?');
            setFooterText('');
        } else if (status === 'together-second') {
            setTopText('Це також ми');
            setBottomText('Няшні?');
            setFooterText('');
        } else if (status === 'together-last') {
            setTopText('Ще миии😘');
            setBottomText('Best couple in love?');
            setFooterText('');
        } else if (status === 'final-proposal') {
            setTopText('Ти моя бусінка❤️');
            setBottomText('Я тебе неймовірно кохаю😽');
            setFooterText('Дякую тобі, за те, що ти завжди зі мною!💓');
        }
    }, [status, count]);

    const onButtonEnterNo = () => {
        const noButton = refButtonNo.current;

        const maxWidth = window.innerWidth - noButton.offsetWidth;
        const maxHeight = window.innerHeight - noButton.offsetHeight;

        const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
        const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

        noButton.style.position = "absolute";
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";
    };

    const onButtonEnterYes = () => {
        setCount(prevState => prevState + 1);

        if (count < 2) {
            const yesButton = refButtonYes.current;
            const maxWidth = window.innerWidth - yesButton.offsetWidth;

            const maxHeight = window.innerHeight - yesButton.offsetHeight;
            const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));

            const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
            yesButton.style.position = "absolute";
            yesButton.style.left = randomX + "px";
            yesButton.style.top = randomY + "px";
        } else {
            setStatus('she-say-yes')

        }
    };

    const handleLoveRange = (loveRange, replace) => {
        if (loveRange <= 50) {
            setFooterText('Якось маловато...');
        } else if (loveRange <= 99) {
            setFooterText('Так мало?(')
        } else {
            setStatus(replace);
        }
    };

    const onOptionChange = e => {
        setCheckedRadio(e.target.value)
    };

    return (
        <div className={styles.container}>
            {status === 'initial' && <img className={styles.imgCatDance} src={catDancing} alt={'catDancing'}/>}
            {status === 'find-yourself' && <img className={styles.imgCatDance} src={catsKissing} alt={'catsKissing'}/>}
            {status === 'she-say-no' && <img className={styles.imgGunCat} src={gunCat} alt={'gunCat'}/>}
            {(status === 'she-say-yes' ||
                    status === 'one-more-time-second' ||
                    status === 'one-more-time-last') &&
                <img className={styles.imgGunCat} src={angryCat} alt={'angryCat'}/>
            }
            {status === 'one-more-time-first' &&
                <img className={styles.imgGunCat} src={catHeartEyes} alt={'catHeartEyes'}/>}
            {status === 'angry' && <img className={styles.imgGunCat} src={fightCat} alt={'fightCat'}/>}
            {status === 'i-love-you' &&
                <img className={styles.imgGunCat} src={whiteCatsKissing} alt={'whiteCatsKissing'}/>}
            {status === 'question-love-me' && <img className={styles.imgGunCat} src={kiss} alt={'kiss'}/>}
            {status === 'question-love-you' && <img className={styles.imgDiasha} src={diasha} alt={'diasha'}/>}
            {status === 'beautiful-girl' &&
                <img className={styles.imgGunCat} src={beautifulGirl} alt={'beautifulGirl'}/>}
            {status === 'first-photo' &&
                <img className={styles.imgGunCat} src={firstPhoto} alt={'firstPhoto'}/>}
            {status === 'together-first' &&
                <img className={styles.imgGunCat} src={togetherFirst} alt={'togetherFirst'}/>}
            {status === 'together-second' &&
                <img className={styles.imgGunCat} src={togetherSecond} alt={'togetherSecond'}/>}
            {status === 'together-last' && <img className={styles.imgGunCat} src={togetherLast} alt={'togetherLast'}/>}
            {status === 'final-proposal' &&
                <img className={styles.imgGunCat} src={finalProposal} alt={'finalProposal'}/>}

            <div className={styles.top}>
                <h1 className={styles.textMx}>{topText}</h1>
            </div>

            <div className={styles.bottom}>
                <h2 className={styles.textLg}>{bottomText}</h2>
                {status === 'initial' && (
                    <img
                        className={styles.imgSleepCat}
                        src={sleepCat}
                        onClick={() => setStatus('find-yourself')}
                        alt={'catDance'}
                    />
                )}
            </div>

            {status === 'find-yourself' && (
                <div className={styles.buttonsGroup}>
                    <Button onClick={() => setStatus('she-say-no')}>Ні😢</Button>
                    <div className={stylesButton.button} onMouseOver={onButtonEnterNo} ref={refButtonNo}>Так🤍</div>
                </div>
            )}
            {status === 'she-say-no' && (
                <div className={styles.buttonsGroup}>
                    <div className={stylesButton.button} onClick={() => {
                        setTopText('Я з тобою не шуткую! Стрілять буду на 3!')
                    }}>Нее
                    </div>
                    <div className={stylesButton.button} onMouseOver={onButtonEnterYes} ref={refButtonYes}>Будууу!!!
                    </div>
                </div>
            )}
            {(status === 'she-say-yes'
                    || status === 'one-more-time-second'
                    || status === 'one-more-time-last') &&
                <div className={styles.buttonsGroup}>
                    <div><Button onClick={() => setStatus('one-more-time-last')}>Да</Button></div>
                    <div><Button onClick={() => setStatus('one-more-time-second')}>Даааа</Button></div>
                    <div><Button onClick={() => setStatus('one-more-time-first')}>ДАААА!!!</Button></div>
                </div>
            }
            {status === 'one-more-time-first' && <div><Button onClick={() => setStatus('angry')}>На 100%</Button></div>}
            {status === 'angry' &&
                <div><Button onClick={() => setStatus('i-love-you')}>{"Я тебе приб'ю!"}</Button></div>}
            {status === 'i-love-you' && <div><Button onClick={() => setStatus('question-love-me')}>ДАА💙</Button></div>}
            {status === 'question-love-me' &&
                <div className={styles.groups}>
                    <input className={styles.range} type="range" min={0} max={100} value={loveRangeMe}
                           onChange={(e) => setLoveRangeMe(e.target.value)}/>
                    <Button onClick={() => handleLoveRange(loveRangeMe, 'question-love-you')}>На стільки</Button>
                </div>
            }
            {status === 'question-love-you' &&
                <div className={styles.groups}>
                    <input className={styles.range} type="range" min={0} max={100} value={loveRangeYou}
                           onChange={(e) => setLoveRangeYou(e.target.value)}/>
                    <Button onClick={() => handleLoveRange(loveRangeYou, 'beautiful-girl')}>На стільки</Button>
                </div>
            }
            {status === 'beautiful-girl' &&
                <div className={styles.groups}>
                    <Button onClick={() => setStatus('first-photo')}>Даа, я така 🥵🤍</Button>
                </div>
            }
            {status === 'first-photo'  &&
                <div className={styles.groups}>
                    <Button onClick={() => setStatus('together-first')}>Sure!💙</Button>
                </div>}
            {status === 'together-first' &&
                <div className={styles.groups}>
                    <input type="text" value={togetherText} onChange={e => setTogetherText(e.target.value)}/>
                    <Button
                        onClick={
                            (togetherText.toLowerCase() === 'так' || togetherText.toLowerCase() === 'дуже')
                                ? () => setStatus('together-second')
                                : () => setFooterText('Не вірно...')}
                    >
                        🤍
                    </Button>
                </div>
            }
            {status === 'together-second' &&
                <>
                    <div className={styles.checkboxGroup}>
                        <input
                            type="radio"
                            name="checkedRadio"
                            value="no"
                            checked={checkedRadio === "no"}
                            onChange={onOptionChange}
                        />
                        <label htmlFor="regular">No</label>
                        <input
                            type="radio"
                            name="checkedRadio"
                            value="yes"
                            checked={checkedRadio === "yes"}
                            onChange={onOptionChange}
                        />
                        <label htmlFor="regular">Yes</label>
                    </div>
                    <Button
                        style={{margin: '0 auto'}}
                        onClick={checkedRadio === 'yes' ? () => setStatus('together-last') : () => setFooterText('Miss click?!')}>🤍</Button>
                </>
            }
            {
                status === 'together-last' &&
                <div className={styles.buttonsGroup}>
                    <Button onClick={() => setStatus('final-proposal')}>Yeeees!!!</Button>
                </div>
            }

            <h2 className={styles.textLg}>{footerText}</h2>
        </div>
    );
};

export default App;