import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

const server = setupServer(
  rest.post('/getProduct', (req, res, ctx) => {
    // Respond with a mocked user token that gets persisted
    // in the `sessionStorage` by the `Login` component.
    return res(
      ctx.json({
        benefitTable: [
          {},
          {
            benefitAmount: 0,
            maturity: 0,
            premiumReceived: 50000,
            totalIcpAmount: 0,
            icprate: 0,
            icpAmount: 0,
            policyYear: 1,
            maturityValue: 0,
            icp: 0,
            accumulatedPremium: 50000,
            cvAmount: 0,
            accumulatedTotalIcpAmount: 0,
            attainedAge: 1,
          },
          {
            benefitAmount: 0,
            maturity: 0,
            premiumReceived: 50000,
            totalIcpAmount: 0,
            icprate: 0,
            icpAmount: 0,
            policyYear: 2,
            maturityValue: 0,
            icp: 0,
            accumulatedPremium: 100000,
            cvAmount: 0,
            accumulatedTotalIcpAmount: 0,
            attainedAge: 2,
          },
          {
            benefitAmount: 0,
            maturity: 0,
            premiumReceived: 50000,
            totalIcpAmount: 0,
            icprate: 0,
            icpAmount: 0,
            policyYear: 3,
            maturityValue: 0,
            icp: 0,
            accumulatedPremium: 150000,
            cvAmount: 0,
            accumulatedTotalIcpAmount: 0,
            attainedAge: 3,
          },
          {
            benefitAmount: 0,
            maturity: 0,
            premiumReceived: 50000,
            totalIcpAmount: 0,
            icprate: 0,
            icpAmount: 0,
            policyYear: 4,
            maturityValue: 0,
            icp: 0,
            accumulatedPremium: 200000,
            cvAmount: 0,
            accumulatedTotalIcpAmount: 0,
            attainedAge: 4,
          },
          {
            benefitAmount: 0,
            maturity: 0,
            premiumReceived: 50000,
            totalIcpAmount: 0,
            icprate: 0,
            icpAmount: 0,
            policyYear: 5,
            maturityValue: 0,
            icp: 0,
            accumulatedPremium: 250000,
            cvAmount: 0,
            accumulatedTotalIcpAmount: 0,
            attainedAge: 5,
          },
        ],
        deathBenefitList: [
          {
            sortOrder: 1,
            benefitCd: 'DEATHBENEFIT',
            benefitDesc: 'DEATHBENEFIT',
            benefitValue: 0,
            benefitSuffix: 'BAHT',
          },
          {
            sortOrder: 2,
            benefitCd: 'DEATHBENEFITRATE',
            benefitDesc: 'DEATHBENEFITRATE',
            benefitValue: 100,
            benefitSuffix: 'BAHT',
          },
        ],
        survivalBenefitList: [
          {
            sortOrder: 1,
            benefitCd: 'ICPMESSAGETOTAL',
            benefitDesc: 'ICPMESSAGETOTAL',
            benefitValue: 0,
            benefitSuffix: 'BAHT',
          },
          {
            sortOrder: 2,
            benefitCd: 'ICPMESSAGE',
            benefitDesc: 'ICPMESSAGE',
            benefitValue: 0,
            benefitSuffix: 'BAHT',
          },
          {
            sortOrder: 3,
            benefitCd: 'ICPMESSAGERATE',
            benefitDesc: 'ICPMESSAGERATE',
            benefitValue: 0,
            benefitSuffix: 'BAHT',
          },
          {
            sortOrder: 4,
            benefitCd: 'MATURITYMESSAGE',
            benefitDesc: 'MATURITYMESSAGE',
            benefitValue: 0,
            benefitSuffix: 'BAHT',
          },
          {
            sortOrder: 5,
            benefitCd: 'MATURITYMESSAGERATE',
            benefitDesc: 'MATURITYMESSAGERATE',
            benefitValue: 0,
            benefitSuffix: 'BAHT',
          },
          {
            sortOrder: 6,
            benefitCd: 'WPTEXT',
            benefitDesc: 'WPTEXT',
            benefitValue: 0,
            benefitSuffix: 'BAHT',
          },
          {
            sortOrder: 7,
            benefitCd: 'CANCERBENEFIT',
            benefitDesc: 'CANCERBENEFIT',
            benefitValue: 0,
            benefitSuffix: 'BAHT',
          },
          {
            sortOrder: 8,
            benefitCd: 'CANCERBENEFITRATE',
            benefitDesc: 'CANCERBENEFITRATE',
            benefitValue: 400,
            benefitSuffix: 'BAHT',
          },
          {
            sortOrder: 9,
            benefitCd: 'OTHERCANCERBENEFIT',
            benefitDesc: 'OTHERCANCERBENEFIT',
            benefitValue: 0,
            benefitSuffix: 'BAHT',
          },
          {
            sortOrder: 10,
            benefitCd: 'OTHERCANCERBENEFITRATE',
            benefitDesc: 'OTHERCANCERBENEFITRATE',
            benefitValue: 100,
            benefitSuffix: 'BAHT',
          },
          {
            sortOrder: 11,
            benefitCd: 'STROKEBENEFIT',
            benefitDesc: 'STROKEBENEFIT',
            benefitValue: 0,
            benefitSuffix: 'BAHT',
          },
          {
            sortOrder: 12,
            benefitCd: 'STROKEBENEFITRATE',
            benefitDesc: 'STROKEBENEFITRATE',
            benefitValue: 400,
            benefitSuffix: 'BAHT',
          },
          {
            sortOrder: 13,
            benefitCd: 'NEUROLOGICALBENEFIT',
            benefitDesc: 'NEUROLOGICALBENEFIT',
            benefitValue: 0,
            benefitSuffix: 'BAHT',
          },
          {
            sortOrder: 14,
            benefitCd: 'NEUROLOGICALBENEFITRATE',
            benefitDesc: 'NEUROLOGICALBENEFITRATE',
            benefitValue: 400,
            benefitSuffix: 'BAHT',
          },
          {
            sortOrder: 15,
            benefitCd: 'HEARTATTACKBENEFIT',
            benefitDesc: 'HEARTATTACKBENEFIT',
            benefitValue: 0,
            benefitSuffix: 'BAHT',
          },
          {
            sortOrder: 16,
            benefitCd: 'HEARTATTACKBENEFITRATE',
            benefitDesc: 'HEARTATTACKBENEFITRATE',
            benefitValue: 400,
            benefitSuffix: 'BAHT',
          },
          {
            sortOrder: 17,
            benefitCd: 'HEARTDISORDERBENEFIT',
            benefitDesc: 'HEARTDISORDERBENEFIT',
            benefitValue: 0,
            benefitSuffix: 'BAHT',
          },
          {
            sortOrder: 18,
            benefitCd: 'HEARTDISORDERBENEFITRATE',
            benefitDesc: 'HEARTDISORDERBENEFITRATE',
            benefitValue: 400,
            benefitSuffix: 'BAHT',
          },
        ],
        dividendBenefitList: [],
        otherBenefitList: [],
        modalRatesList: [
          {
            paymentFrequencyCd: 'YEARLY',
            modalPremium: 50000,
            annualizedModalPremium: 50000,
          },
          {
            paymentFrequencyCd: 'QUARTERLY',
            modalPremium: 0,
            annualizedModalPremium: 0,
          },
          {
            paymentFrequencyCd: 'HALFYEARLY',
            modalPremium: 0,
            annualizedModalPremium: 0,
          },
          {
            paymentFrequencyCd: 'MONTHLY',
            modalPremium: 4500,
            annualizedModalPremium: 54000,
          },
        ],
        quotationProductList: [
          {
            productId: 'ECOMMBIG3',
            productTypeCd: 'PLAN',
            productFamilyCd: 'TERM',
            baseSumAssured: 0,
            baseAnnualPremium: 50000,
            productTerm: 5,
            premiumPayingTerm: 5,
            paymentFrequencyCd: 'YEARLY',
            planCode: 'T11A20',
            selected: true,
          },
        ],
      })
    );
  })
);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('UI renders', () => {
  test('renders input & label First name', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByLabelText('First name')).toBeInTheDocument();
  });

  test('renders input & label Last name', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByLabelText('Last name')).toBeInTheDocument();
  });

  test('renders input & label Gender', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByLabelText('Gender')).toBeInTheDocument();
  });

  test('renders input & label Date of birth', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByLabelText('Date of birth')).toBeInTheDocument();
  });

  test('renders input & label Plan', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByLabelText('Plan')).toBeInTheDocument();
  });

  test('renders input & label Amount (Per Year)', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByLabelText('Amount (Per Year)')).toBeInTheDocument();
  });

  test('renders buttons', () => {
    const { getAllByRole } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const buttons = getAllByRole('button');
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveAttribute('type', 'reset');
    expect(buttons[0]).toContainHTML('<span>Reset</span>');
    expect(buttons[1]).toHaveAttribute('type', 'submit');
    expect(buttons[1]).toContainHTML('<span>Calculate</span>');
  });

  test('required fields', async () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    //userEvent.type(getByLabelText('Amount (Per Year)'), '50000');
    await act(async () => {
      await userEvent.type(getByLabelText('Amount (Per Year)'), '50000');
      userEvent.click(getByText(/Calculate/i));
    });

    // Assert form not submit & warning message display
    // expect(alert).toHaveTextContent(/welcome/i);
  });
});

describe('redux tests', () => {
  test('allows the user to calculate insurance', async () => {
    const { getByLabelText, getByText, getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await act(async () => {
      await userEvent.type(getByLabelText('First name'), 'Alice');
      await userEvent.type(getByLabelText('Last name'), 'Smith');
      await userEvent.type(getByLabelText('Amount (Per Year)'), '50000');
      await userEvent.type(getByLabelText('Date of birth'), '2000-01-01');

      userEvent.click(getByText(/Calculate/i));

      // assert
      //expect(getByTestId('calResult')).toBeInTheDocument();
    });
  });

  test('allows the user to reset form', async () => {
    const { getByLabelText, getByText, getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await act(async () => {
      await userEvent.type(getByLabelText('First name'), 'Alice');
      await userEvent.type(getByLabelText('Last name'), 'Smith');
      await userEvent.type(getByLabelText('Amount (Per Year)'), '50000');
      await userEvent.type(getByLabelText('Date of birth'), '2000-01-01');

      userEvent.click(getByText(/Reset/i));

      // assert
      expect(getByLabelText('First name')).toBeEmpty();
      expect(getByLabelText('Last name')).toBeEmpty();
      expect(getByLabelText('Amount (Per Year)')).toBeEmpty();
    });
  });
});
