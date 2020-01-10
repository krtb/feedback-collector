import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Components {
    render() {
        return(
            <div>
                <StripeCheckout
                    amount={500}
                    token={token => console.log(token)}
                />
            </div>
        )
    }
}

export default Payments