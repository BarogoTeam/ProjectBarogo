import React, {Component} from "react";
import BarogoButton from "../Component/BarogoButton";

class ResultView extends Component {
    render() {
        let {menuName} = this.props;

        let clickButton = () => {
            console.log("BUTTON CLICKED!!!")
        };

        return (
            <div>
                <div>ResultView</div>

                <div>
                    선택된 메뉴는 {menuName} 입니다
                </div>

                <BarogoButton className="ANY_CLASS_NAME" title="ANY_TITLE" onClickFunction={clickButton} imageSource="resource/image/Unknown.jpg"/>
            </div>
        )
    }
}

export default ResultView;