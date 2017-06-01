import {
  markupMenu
} from './markup-menu';
markupMenu(window.document);
import header from "./header";
import anchor from "./anchor";
import tabs from './tabs';

$(() => {
  header();
  anchor();
  tabs();
});
