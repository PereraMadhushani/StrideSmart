import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiService {
  static const String baseUrl = 'http://localhost:3000/api';

  // Login functionality
  static Future<Map<String, dynamic>> login(
      String regNumber, String password) async {
    final response = await http.post(
      Uri.parse('$baseUrl/login'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'regNumber': regNumber, 'password': password}),
    );
    return response.statusCode == 200
        ? jsonDecode(response.body)
        : {'success': false, 'message': 'Login failed'};
  }

//  send otp functinality
  static Future<Map<String, dynamic>> sendOtp(String email) async {
    final response = await http.post(
      Uri.parse('$baseUrl/send-otp'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'email': email}),
    );
    return response.statusCode == 200
        ? jsonDecode(response.body)
        : {'success': false, 'message': 'Failed to send OTP'};
  }

// verify otp functionality
  static Future<Map<String, dynamic>> verifyOtp(
      String email, String otp) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/verify-otp'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({'email': email, 'otp': otp}),
      );

      if (response.statusCode == 200) {
        return jsonDecode(response.body);
      } else {
        return {
          'success': false,
          'message': response.body.isNotEmpty
              ? jsonDecode(response.body)['message']
              : 'Failed to verify OTP'
        };
      }
    } catch (e) {
      return {'success': false, 'message': 'Error: $e'};
    }
  }

  // Password reset functionality
  static Future<Map<String, dynamic>> resetPassword(
      String email, String newPassword) async {
    final response = await http.post(
      Uri.parse('$baseUrl/reset-password'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'email': email, 'newPassword': newPassword}),
    );
    return response.statusCode == 200
        ? jsonDecode(response.body)
        : {'success': false, 'message': 'Password reset failed'};
  }
}
