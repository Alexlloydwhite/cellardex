import loginMessage from '../../../main/redux/reducers/errors.reducer';

describe("Errors reducer", () => {
    it.each([
        [ 'error on clearing login', 'CLEAR_LOGIN_ERROR', "" ],
        [ 'error on login input', 'LOGIN_INPUT_ERROR', "Enter your username and password!" ],
        [ 'generic login failed error', 'LOGIN_FAILED', "Oops! The username and password didn't match. Try again!" ],
        [ '500 error on login', 'LOGIN_FAILED_NO_CODE', 'Oops! Something went wrong! Is the server running?' ],
        [ 'returns default state if given unknown action type', 'UNKNOWN_ACTION_TYPE', "" ]
    ])("%s", (_, actionType, expectedState) => {
        // GIVEN:
        const action = {
            type: actionType
        }

        // WHEN:
        const loginState = loginMessage({}, action);

        // THEN:
        expect(loginState.loginMessage).toBe(expectedState);
    });
});
