import React from "react";
import "./directory.component.scss";
import MenuItem from "../menu-item/menu-item.component";
class Directory extends React.Component {
  constructor() {
    super();
    // for cover image "https://cdn.pixabay.com/photo/2016/01/27/22/10/shopping-1165437_1280.jpg"
    this.state = {
      sections: [
        {
          title: "Organic Foods",
          imageUrl:
            "https://cdn.pixabay.com/photo/2017/04/03/13/38/fruit-free-2198378_1280.png",
          id: 1,
          linkUrl: "foods",
        },
        {
          title: "Cosmetics",
          imageUrl:
            "https://cdn.pixabay.com/photo/2016/02/19/11/35/make-up-1209798_1280.jpg",
          id: 2,
          linkUrl: "cosmetics",
        },
        {
          title: "Cars",
          imageUrl:
            "https://cdn.pixabay.com/photo/2018/01/20/19/05/auto-3095196_1280.jpg",
          id: 3,
          linkUrl: "cars",
        },
        {
          title: "Gift Corner",
          imageUrl:
            "https://cdn.pixabay.com/photo/2016/05/28/00/06/gift-1420830_1280.jpg",
          id: 4,
          size: "large",
          linkUrl: "gifts",
        },
        {
          title: "Clothings",
          imageUrl:
            "https://cdn.pixabay.com/photo/2017/11/26/19/50/jeans-2979818_1280.jpg",
          size: "large",
          id: 5,
          linkUrl: "clothings",
        },
      ],
    };
  }

  render() {
    return (
      <div className='home__menu'>
        {this.state.sections.map(
          ({ id, ...otherSectionProps }) => (
            <MenuItem
              key={id}
              {...otherSectionProps}
            ></MenuItem>
          )
        )}
      </div>
    );
  }
}

export default Directory;
