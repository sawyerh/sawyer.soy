class ConditionalContent extends HTMLElement {
  connectedCallback() {
    this._inputName = this.getAttribute("when");
    this._displayWhen = this.getAttribute("is");
    this.$inputs = document.querySelectorAll(`[name="${this._inputName}"]`);
    this._values = [];

    this._updateToggleState();
    this._addListener();
  }

  disconnectedCallback() {
    // TODO: Remove event listeners
  }

  /**
   * Listen to changes on the targeted input(s)
   */
  _addListener() {
    this.$inputs.forEach((el) => {
      el.addEventListener("change", this._updateToggleState.bind(this));
    });
  }

  /**
   * Check if the targeted input(s) have the targeted value
   */
  _isConditionMet() {
    return this._values.includes(this._displayWhen);
  }

  _updateToggleState() {
    this._updateValues();

    if (this._isConditionMet()) {
      this.style.display = "block";
    } else {
      this.style.display = "none";
    }
  }

  /**
   * Check the targeted input(s) and store values of the selected ones
   */
  _updateValues() {
    const values = [];

    this.$inputs.forEach((el) => {
      if (el.checked) {
        values.push(el.value);
      }
    });

    this._values = values;
  }
}

customElements.define("conditional-content", ConditionalContent);
