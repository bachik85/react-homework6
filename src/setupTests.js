import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
});