import Button from '@components/Button/Button';
import React from 'react';
import FormItem from '@/pages/DetailProduct/components/FormItem';
import styles from '../styles.module.scss';
const ReviewProduct = () => {
    const {
        containerReview,
        reviews,
        noreview,
        replyForm,
        commentReplyTitle,
        commentTotes,
        commentFormCookiesConsent,
        btnSubmit,
    } = styles;
    return (
        <div className={containerReview}>
            <div className={reviews}>REVIEWS</div>
            <p className={noreview}>There are no reviews yet.</p>
            <div className={replyForm}>
                <div className={commentReplyTitle}>
                    BE THE FIRST TO REVIEW "10K YELLOW GOLD"
                </div>
                <p className={commentTotes}>
                    Your email address will not be published. Required fields
                    are marked
                </p>
                <form action=''>
                    {/* {rating} */}
                    <FormItem
                        label={'Your rating'}
                        isRequired
                        typeChildren='rating'
                    />
                    {/* {area} */}
                    <FormItem
                        label={'Your reviews'}
                        isRequired
                        typeChildren='textarea'
                    />
                    {/* {Name} */}
                    <FormItem label={'Name'} isRequired typeChildren='input' />
                    {/* {Email} */}
                    <FormItem label={'Email'} isRequired typeChildren='input' />
                    <div className={commentFormCookiesConsent}>
                        <input type='checkbox' />
                        <span>
                            Save my name, email, and website in this browser for
                            the next time I comment.
                        </span>
                    </div>
                    <div className={btnSubmit}>
                        <Button content={'Submit'} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewProduct;
