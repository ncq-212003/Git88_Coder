import React from "react";
import '../partner.scss';
import axios from "axios";
import { error } from "jquery";


class InsertPartner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            partnerCode: '',
            commonGroupId: '',
            phone: '',
            address: '',
            tax: '',
            note: '',
            debitStart: '',
            email: ''
        }
    }

    InsertData = async (event) => {
        event.preventDefault();
        const form = new FormData();

        form.append("partnerId", 23);
        form.append("dId", 2);
        form.append("hashCode", 3456);
        form.append("partnerTypeId", 746);
        form.append("partnerTypeIdHidden", 343);
        form.append("name", this.state.name);
        form.append("partnerCode", this.state.partnerCode);
        form.append("commonGroupId", 2);
        form.append("commonGroupIdHidden", 2);
        form.append("phone", this.state.phone);
        form.append("address", this.state.address);
        form.append("email", this.state.email);
        form.append("tax", this.state.tax);
        form.append("flag", "q");

        console.log("checkk state", this.state);
        await axios.post('http://erp1.a.tisbase.online/api/v1/Partner/insert', form)
            .then(response => {
                console.log(response.data);
                alert('Chen du lieu thanh cong');
                this.setState({
                    name: '',
                    partnerCode: '',
                    commonGroupId: '',
                    phone: '',
                    address: '',
                    tax: '',
                    note: '',
                    debitStart: '',
                    email: ''
                })
            })
            .catch(
                error => {
                    console.error(error);
                    alert('Da xay ra loi khi chen du lieu');
                }
            )
    }
    render() {
        return (
            <div class="container">
                <div className="box">
                    <h2>THÊM KHÁCH HÀNG</h2>
                    <form >
                        <div class="row">
                            <div class="col-25">
                                <label for="name">Tên KH</label>
                            </div>
                            <div class="col-75" >
                                <input type="text" id="name" value={this.state.name} name="name"
                                    onChange={(addname) => this.setState({ name: addname.target.value })} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="code">Mã KH</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="code" name="code" value={this.state.partnerCode}
                                    onChange={(addcode) => this.setState({ partnerCode: addcode.target.value })} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="group">Nhóm</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="group" name="group" value={this.state.commonGroupId}
                                    onChange={(addgroup) => this.setState({ commonGroupId: addgroup.target.value })} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="phone">Số Điện Thoại</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="phone" name="phone" value={this.state.phone}
                                    onChange={(addphone) => this.setState({ phone: addphone.target.value })} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="address">Địa Chỉ</label>
                            </div>
                            <div class="col-75">
                                <textarea id="address" name="address" value={this.state.address}
                                    onChange={(addaddress) => this.setState({ address: addaddress.target.value })}
                                ></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="email">Email</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="email" name="email" value={this.state.email}
                                    onChange={(addemail) => this.setState({ email: addemail.target.value })}
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="code_fax">Mã Số Thuế</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="code_fax" name="code_tax" value={this.state.tax}
                                    onChange={(addcodefax) => this.setState({ tax: addcodefax.target.value })} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="note">Ghi Chú</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="note" name="note" value={this.state.note}
                                    onChange={(addnote) => this.setState({ note: addnote.target.value })} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="money">Nợ Bắt Đầu</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="money" name="money" value={this.state.debitStart}
                                    onChange={(addmoney) => this.setState({ debitStart: addmoney.target.value })}
                                />
                            </div>
                        </div>


                        <div class="row">
                            <input type="submit" value="Lưu" onClick={(event) => this.InsertData(event)} />
                        </div>
                    </form>
                </div>

            </div>

        )
    }
}
export default InsertPartner;