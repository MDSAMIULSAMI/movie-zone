import React from 'react'

function login() {
    return (
        <React.Fragment>
            <div className='container my-4'>
                <h1 className='text-white'>Log In</h1>
                <div class="input-group mb-3">
                    <div class="input-group-text">
                        <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                    </div>
                    <input type="text" class="form-control" aria-label="Text input with checkbox"/>
                </div>

                <div class="input-group">
                    <div class="input-group-text">
                        <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input"/>
                    </div>
                    <input type="text" class="form-control" aria-label="Text input with radio button"/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default login
