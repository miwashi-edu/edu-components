import TitleAtom from './TitleAtom.jsx';
import SubTitleAtom from './SubTitleAtom.jsx';
import styels from './Logo.module.css';

const Logo =()=> {
    return (
        <div className={styels.logo}>
            <TitleAtom>WACOCO</TitleAtom>
            <SubTitleAtom>Wallin Computer Consulting</SubTitleAtom>
        </div>
    )
}

export default Logo;