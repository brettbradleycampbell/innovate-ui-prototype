// import {MDCRipple} from '@material/ripple/index';
// const ripple = new MDCRipple(document.querySelector('.button-ripple'));

// Import
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCTextField} from '@material/textfield';
import {MDCList} from '@material/list';
import {MDCSelect} from '@material/select';
import {MDCSwitch} from '@material/switch';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';
import {MDCDrawer} from "@material/drawer";
import {MDCMenu} from '@material/menu';
import {MDCMenuSurface} from '@material/menu-surface';
import {MDCDialog} from '@material/dialog';
import {MDCTabBar} from '@material/tab-bar';
import {MDCRadio} from '@material/radio';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const list = new MDCList(document.querySelector('.mdc-list'));
const select = new MDCSelect(document.querySelector('.mdc-select'));
const select2 = new MDCSelect(document.querySelector('.mdc-select-2'));
const selectdemo = new MDCSelect(document.querySelector('.mdc-select-3'));

//
const switchControl = new MDCSwitch(document.querySelector('.mdc-switch1'));
const switchControl2 = new MDCSwitch(document.querySelector('.mdc-switch2'));
//
const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
formField.input = checkbox;
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
//
const menu = new MDCMenu(document.querySelector('.mdc-menu'));
menu.open = true;
const menuSurface = new MDCMenuSurface(document.querySelector('.mdc-menu-surface'));
const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

const radio = new MDCRadio(document.querySelector('.mdc-radio'));
formField.input = radio;