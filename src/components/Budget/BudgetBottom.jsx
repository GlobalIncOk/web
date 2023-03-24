import React from 'react';
import '../../styles/BudgetBottom.sass'
import Budget from '../Buttons/Budget/Budget';

const BudgetBottom = () => {
	return (
    <div className="budget-bottom-container">
      <img src='https://elementor.com/cdn-cgi/image/f=auto,w=1200,h=628/marketing/wp-content/uploads/sites/9/2017/08/background-post.png' alt="Overlay Image" />
      <div className="budget-bottom-text">
        <h2>Lorem ipsum dolor sit amet consectetur. Arcu proin viverra</h2>
        <p>Nunc et rhoncus vitae malesuada praesent urna nulla ultricies. Est et facilisi bibendum feugiat adipiscing duis tindcidunt semper. Risus euismod mi cursus euismod justo ac.</p>
        <Budget/>
      </div>
    </div>
	)
}

export default BudgetBottom;
