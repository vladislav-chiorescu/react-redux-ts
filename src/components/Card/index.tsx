import React from 'react';

import { ReactComponent as ArrowCircle } from '../../assets/arrow-circle.svg';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';
import { ReactComponent as BookmarkIcon } from '../../assets/bookmark.svg';
import * as S from './styled';

import { CardProps } from './Card';

export const Card: React.FC<CardProps> = ({
  large,
  category,
  datetime,
  headline,
  summary,
  image,
  url,
}) => {
  return (
    <S.Card large={large}>
      <img className="card-image" src={image} alt={headline} />
      <div className="flex-container">
        <div className="category">{category}</div>
        {large && <div className="tag">latest research</div>}
      </div>
      <div className="content">
        <div className="title">{headline}</div>
        <div className="summary">{summary}</div>
      </div>
      <div className="bottom-content">
        <div className="flex-container">
          {large && (
            <>
              <div className="explore">
                <ArrowCircle className="card-arrow-circle" />
                Read the research
              </div>
              <div className="separator" />
            </>
          )}
          <div className="date">{datetime}</div>
          <div className="separator" />
          <div className="duration">6 min read</div>
        </div>
        <div className="flex-container">
          <a href={url} target="_blank" rel="noreferrer">
            <ArrowIcon className="card-icon" />
          </a>
          <BookmarkIcon className="card-icon" />
        </div>
      </div>
    </S.Card>
  );
};