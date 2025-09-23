import { useNavigate } from "react-router";
import ScrollToTop from "../../Components/ScrollToTop";
import ToggleButton from "../../Components/ToggleButton";

const PageHeader = () => {

    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    }
    return (
        <header id="header">
            <div className="header container">
                <div className="nav-bar">
                    <div className="brand">
                        <a href="#hero">
                            <h1>
                                <span>J</span>oel <span>K</span>asisi
                            </h1>
                        </a>
                    </div>
                    <div className="btn_container">
                        <ToggleButton />
                    </div>
                    <div className="nav-list">
                        <div className="hamburger">
                            <div className="bar"></div>
                        </div>
                        <ul>
                            <li>
                                <a onClick={goHome} data-after="Home">
                                    Home
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </header>
    );
};

export default PageHeader;