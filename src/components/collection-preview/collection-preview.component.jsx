import React from 'react';
import {withRouter} from 'react-router-dom'

import './collection-preview.styles.scss'

import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({title, items, routeName}) => {
  return <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      {items.slice(0, 4).map(({id, ...otherItemProps}) => (
        <CollectionItem key={id} {...otherItemProps} />
      ))}
    </div>
      
  </div>
}

export default withRouter(CollectionPreview);