import React  from 'react';
import DropDownItems from './dropDownItems';

const DropDownMenu = ({menuName, menuItems, selectedElements, handleSelect}) => {
    const color = "#E3E0E0";
    return ( 
        <div class="dropdown">
                <button class="btn btn-secondary btn-lg dropdown-toggle dropdown-toggle-split" style={{backgroundColor:color, color:"black", borderColor:color, marginRight:"30px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {menuName}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <DropDownItems
                    menuItems={menuItems}
                    selectedElements={selectedElements}
                    handleSelect={handleSelect}

                    />
                </div>
        </div>
    
     );
}
 
export default DropDownMenu;