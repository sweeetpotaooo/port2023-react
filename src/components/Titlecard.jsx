import React from 'react';
import './TitleCard.css'; // 혹은 원하는 CSS 파일의 경로로 수정

const TitleCard = () => {
    return (
        <div className="title-card">
            <div className="title-card-inner">
                <div className="title-card-content">
                    <div className="title-card-header">
                        <div className="title-card-header-left">
                            <div className="status-tag"># 신입생</div>
                            <div className="gender-icon">🚹</div>
                        </div>
                    </div>
                    <div className="title-card-body">
                        <div className="title">TITLE</div>
                        <div className="date">2023-10-10</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitleCard;