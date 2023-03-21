import React from 'react';
import '../../styles/Budget2.sass'
import Budget from '../Buttons/Budget/Budget';

const Budget2 = () => {
	return (
    <div class="budget2-row">
      <div class="budget2-col-1">
        <h1>Lorem ipsum dolor sit amet consectetur. Arcu proin viverra</h1>
        <p>Nunc et rhoncus vitae malesuada praesent urna nulla ultricies. Est et facilisi bibendum feugiat adipiscing duis tindcidunt semper. Risus euismod mi cursus euismod justo ac.</p>
        <Budget/>
      </div>
      <div class="budget2-col-2">
        <img src="https://elementor.com/cdn-cgi/image/f=auto,w=1200,h=628/marketing/wp-content/uploads/sites/9/2017/08/background-post.png"
          alt=""
        />
      </div>
    </div>
	)
}

export default Budget2;
