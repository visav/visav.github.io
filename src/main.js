var ContactInfo = React.createClass({
  render: function() {
    return (
      <div className="contact-info">
        Visa Varjus
      </div>
    );
  }
});

React.render(
 <ContactInfo />,
 document.getElementById('content')
);
