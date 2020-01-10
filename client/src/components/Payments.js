import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Components {
    render() {
        return(
            <div>
                <StripeCheckout
                    amount={500}
                />
            </div>
        )
    }
}

export default Payments