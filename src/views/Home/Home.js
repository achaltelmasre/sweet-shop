import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



function MyComponent() {
  return (
<>
    <div className="container">
      <button type="button" class="btn btn-primary p-3">Primary</button>
      <p>This is a <FontAwesomeIcon icon={faHeart} /> icon.</p>

      

    </div>
 </>  
  );
}


export default MyComponent;