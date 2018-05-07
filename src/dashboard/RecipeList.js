import React from 'react';

import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  gridListTile: {
    height: "500px"
  },
  title: {
    color: "black",
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
};

class RecipeList extends React.Component {
  state = {
  };

  render() {
    let imgUrls = [
      "http://simpledoing.com/wp-content/uploads/2018/01/Hello-Fresh.jpg",
      "http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2014/12/main/1501p77-salmon-lime-hoisin-glaze-crunchy-bok-choy-slaw.jpg?itok=6dF2Fohu",
      "http://images.media-allrecipes.com/images/71852.jpg",
      "https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-img.health.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge_16_9%2Fpublic%2F1479761250%2FGettyImages-588978788.jpg%3Fitok%3D-dDMVKmG&w=700&q=85",
      "http://www.awakentheabswithin.com/wp-content/uploads/2012/01/healthy-meal.jpg"
    ];

    return (
      <GridList style={styles.gridList} cols={1.5}>
        {imgUrls.map((imgUrl,idx) => (
          <GridListTile key={"tile" + idx} style={styles.gridListTile}>
            <img src={imgUrl} />
            <GridListTileBar
              style={styles.titleBar}
              title={"ham"}
            />
          </GridListTile>
        ))}
      </GridList>
    )
  }
}

export default RecipeList;
