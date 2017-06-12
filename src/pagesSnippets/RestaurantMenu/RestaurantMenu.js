import React, {Component} from 'react';
import SnippetBenefits from '../../compontents/snippetComponents/SnippetBenefits/SnippetBenefits'
import SnippetCurrentSpreadSheet from '../../compontents/snippetContainers/SnippetCurrentSpreadSheet/SnippetCurrentSpreadSheet'
import SnippetPreview from '../../compontents/snippetComponents/SnippetPreview/SnippetPreview'
import SnippetMobilePreview from '../../compontents/snippetComponents/SnippetMobilePreview/SnippetMobilePreview'

import './RestaurantMenu.css'
/*
 props for this component

 name - name of the component - mainly to get images/gif
 title - show title
 subtitle - show description on top of component
 description - description of snippet


 Put an png and gif files with `this.props.name` name to the ./public/images/snippetDemos
 */


class RestaurantMenu extends Component {
  constructor(props){
    super(props);
    this.tableData = [
      ["name", "ingredients", "price", "image"],
      ["Fungi", "souce, cheese, mashrooms", "$20", "http://piwiarniamarzycieli.eu/wp-content/uploads/2013/05/pizza_foto.jpg"],
      ["Pepperoni", "souce, cheese, pepperoni", "$18", "http://media.istockphoto.com/photos/pizza-from-the-top-deluxe-picture-id182148711" ],
      ["Texas", "souce, cheese, pepper, mashrooms, tomato", "$18", "http://www.papajays.net/images/slide02.png"],
      ["Supreme", "souce, cheese, ", "$20", "https://d2mekbzx20fc11.cloudfront.net/uploads/LDP_2015_PANCETTA_Mobile_600x6002.png"],
      ["Colorado", "souce, cheese, ham", "$15", "http://www.mytopitpizza.com/wp-content/uploads/2015/08/Web-Over-the-Top-Iso.png" ]
    ];
  }
  render() {
    return (
      <div className="snippet-details">
        <section className="section section--customizer bg-white">
          <div className="container">
            <div className="row">
              <SnippetCurrentSpreadSheet cellStyle={[{"width": "10%"},{"width": "25%"},{"width": "10%"},{"width": "55%"}]} tableData={this.tableData}/>
            </div>
            <div className="row">
              <div className="col-md-6 ">
                <SnippetPreview htmlTemplate="restaurant" />
              </div>
              <div className="col-md-6">
                <SnippetMobilePreview/>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--benefits bg-green">
          <SnippetBenefits benefits={[
            { name: "bene1", title: "benefit one", description: "Description of benefit"},
            { name: "bene2", title: "benefit two", description: "Description of benefit"},
            { name: "bene3", title: "benefit three", description: "Description of benefit"},
          ]}
          />
        </section>
      </div>
    );
  };
}

export default RestaurantMenu;
