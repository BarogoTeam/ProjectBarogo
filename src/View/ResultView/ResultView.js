import React, {Component} from "react";
import BarogoButton from "../../Component/BarogoButton";
import {putVotedPeopleCount} from "../../Redux/Action/Vote";
import {connect} from "react-redux";

class ResultView extends Component {
    render() {
        let {menuName} = this.props;

        let clickButton = () => {
            console.log("BUTTON CLICKED!!");
            this.props.putVotedPeopleCount(this.props.votedPeopleCount + 1);
        };

        return (
            <div>
                <div>ResultView</div>

                <div>
                    선택된 메뉴는 {menuName} 입니다
                </div>

                <div>
                    현재 투표 완료 된 사람 수는 {this.props.votedPeopleCount} 입니다. (state.vote.votedPeopleCount)
                </div>

                <BarogoButton className="ANY_CLASS_NAME" title="ANY_TITLE" onClickFunction={clickButton} imageSource="resource/image/Unknown.jpg"/>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        putVotedPeopleCount: (count) => {dispatch(putVotedPeopleCount(count))}
    }
};

let mapStateToProps = (state) => {
    return {
        votedPeopleCount: state.vote.votedPeopleCount
    }
};

ResultView = connect(mapStateToProps, mapDispatchToProps)(ResultView);

export default ResultView;